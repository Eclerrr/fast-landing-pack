module.exports = params => {


	let content = 
`section.s-content
	h1.title Заголовок
	.date
		script(type='text/javascript').
			dtime_nums(-7, true)
	p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae eos delectus libero a magni consectetur provident alias ullam impedit vel, saepe facilis doloremque, debitis neque cupiditate iure! Labore quisquam quasi laborum dolorum voluptas delectus nam tenetur repudiandae facilis ratione nisi excepturi quia, veritatis est maiores inventore consequatur quibusdam qui saepe! Molestiae molestias laboriosam, itaque ab ipsa, a ipsam quis veniam repellendus explicabo officiis impedit inventore, aliquid labore omnis voluptas ullam placeat! Debitis iure libero dolor, dolores commodi facere, aperiam quas nisi, quibusdam, perspiciatis iusto harum quos repellat placeat! Hic nostrum quasi incidunt, fugit soluta optio nisi odio ullam eaque? Consequatur.
	//- Кнопка			
	.center-t.gutter
		.button
			a(href="").button__text Заказать
`;

	return content;
}