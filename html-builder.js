;(function(){

    class HtmlBuilder 
    {
        constructor()
        {
            this.___htmlUpdate();
            this.document = window.document;
            this.body = window.document.body;
        }

        ___htmlUpdate()
        {
            HTMLElement.prototype.addClassName = function(classes)
            {
                let arr = classes.trim().split(" ");

                for (let i = 0; i < arr.length; i++)
                {
                    this.classList.add(arr[i]);
                }

                return this;
            }

            HTMLElement.prototype.appendChilds = function(...childs)
            {
                for (let i = 0; i < childs.length; i++)
                {
                    if (!(childs[i] instanceof Node))
                    {
                        throw new Error(`${childs[i]} is not a HTML element.`)
                    }

                    else
                    {
                        this.appendChild(childs[i]);
                    }
                }

                return this;
            }

            HTMLElement.prototype.fill = function(data)
            {
                this.innerHTML = data;
                return this;
            }

            HTMLImageElement.prototype.setSrc = function(url)
            {
                this.setAttribute('src', url);
                return this;
            }

            HTMLImageElement.prototype.setSize = function(w, h)
            {
                if (w) this.width = w;
                if (h) this.height = h;
                return this;
            }
        }

        create(element)
        {
            return this.document.createElement(element)
        }

        find(selector)
        {
            return this.document.querySelectorAll(selector).length > 1 ?  this.document.querySelectorAll(selector) : this.document.querySelectorAll(selector)[0];
        }

    }

    window.hb = new HtmlBuilder();

    // document.body.appendChild(
    //     hb.create('div').addClassName('container app test').appendChilds(

    //         hb.create('div').addClassName('row header').appendChild(
    //             hb.create('div').addClassName('col-6 logo').appendChild(
    //                 hb.create('img').setAttribute('src', 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png')
    //             )
    //         ),

    //         hb.create('div').addClassName('row content').appendChilds(
    //             hb.create('div').addClassName('col-12').fill('some content')
    //         ),

    //         hb.create('div').addClassName('row footer').appendChilds(
    //             hb.create('div').addClassName('col-12').fill(new Date())
    //         )
    //     )
    // )

}());