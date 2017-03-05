module.exports = function (path,template,replace){

  // Данный таск генерирует дерево файлов, если оно не создано и дополняет уже существующие.


  let async = require('async');
  let fs = require('fs');
  let colors = require('colors');
  let createFile = require('create-file');
  let del = require('del');

  
  var fileNumbers = 0;
  var folderNumbers = 0;



  // Генератор папки
  let folderGenerator = function(folder,callback){



  	if((typeof folder === "object") && (folder !== null) ){
      if(replace == 'replace'){
        del.sync(folder.path);
        console.log('Удален файл '.blue + folder.path.blue);
      }
  		fs.stat(folder.path, function(err,stats){
  			if(!stats){
  				createFile(folder.path,folder.content,(err) => {
	      	if(err) throw err;
	      	fileNumbers++;
	      	console.log('Создан файл '.blue + folder.path.blue);
	      	callback();
	      })

  			}
  			else{
  				callback();
  			}
  		})
  		
		}else{
      if(replace == 'replace'){
        del.sync(folder);
        console.log('Удалена папка '.green + folder.green);
      }
			fs.stat(folder, function(err,stats){
      if(!stats){
        fs.mkdir(folder,(err) =>{
          if(err) throw err;
          folderNumbers++;
        	console.log('Создана папка '.green + folder.green);
          callback();
        })
      }else{
        callback();
      }
    })
  }
};


  return function(callback){
		async.each(template(),(folder,callback_2)=>{

			folderGenerator(folder,callback_2);

		},()=>{
			console.log('Созданно файлов '.blue + fileNumbers);
			console.log('Созданно папок '.green + folderNumbers);
			callback();
		})


	};
};