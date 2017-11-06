module.exports = params => {


	let content = 
`*,*:after,*:before{
    box-sizing: border-box;
    word-wrap: break-word;
}


img,video{
    max-width: 100%;
    display: block;
    max-height: 400px;

}

figure{
    margin: 0;
    padding: 0;
}

svg{
    height: 100%;
    width: 100%;
    fill: currentColor;
}



body,html{
    height: 100%;
    font-size: 100%;
    margin: 0;
    padding: 0;
    line-height: 1.5;
    font-family: $fontBase;
    color: #3e3e3e;
}



.wrapper{
    width: 100%;
    overflow: hidden;
}

.container{
    width: 100%;
    display: block;
    max-width: $container;
    margin: 0 auto;
    padding: 0 $gutter;
    position: relative;
}

::selection{
    color: #fff;
    background: $colorBase;
}

.t{
    &--light{
        font-weight: 300;
    }
    &--bold{
        font-weight: 700;
    }
    &--italic{
        font-style: italic;
    }
    &--medium{
        font-weight: 500;
    }
    &--ttu{
        text-transform: uppercase;
    }
    &--ttl{
        text-transform: lowercase;
    }
    &--imp{
        color: $colorBase;
    }
    &--ex{
        color: $colorExtra;
    }
    &--block{
        display: block;
    }
}
`;

	return content;
}