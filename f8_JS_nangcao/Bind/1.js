const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const app =( () => {
    const cars = ['BMW'];
    const root = $('#root');
    const input = $('#input');
    const submit = $('#submit');
    return {
        add(car) {
            cars.push(car)
        },
        delete(index) {
            cars.splice(index,1)

        },
        render() {
            const html = cars.map( (car,index) => 
              `<li> ${car} 
                    <span class = "delete" data-index = "${index}">&times</span>
              </li>`  
            )
            .join('')
            root.innerHTML = html
        },
        handleDelete(event) {
            //closest: tìm trong element có delete không
            const deleteBtn = event.target.closest('.delete');
            if (deleteBtn) {
                //dataset.{tên}  == data - {tên} 
                const index =  deleteBtn.dataset.index;
                this.delete(index)
                this.render()
            }
        },
        innit() {
            //handle DOM event 
            submit.onclick = () =>{
                const car = input.value;
                this.add(car);
                this.render();
                input.value = null;
                input.focus;
            }
            root.onclick = this.handleDelete.bind(this) //bind(this) == bind(app)
            this.render()
        }
    }

}) ();
app.innit()