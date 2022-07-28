const dragZone = document.querySelector('.block__dragzone');
const zone = document.querySelector('.block__zone')
const dragItem = document.querySelectorAll('.dragItem');
const homeZone = document.querySelector('.block__tables');
const sizebtn = document.querySelectorAll('.size')
const resizer = document.querySelectorAll('.resizer')


sizebtn.forEach(el => {
    el.addEventListener('click', function() {
      sizebtn.forEach(el => el.classList.remove('size__active'));
      el.classList.add('size__active');
      if (el.classList.contains('size_sqrt')){
        // zone.style.width = '800px'
      } else if (el.classList.contains('size_rect')){
        console.log('rect')
      } else {
        console.log('smth else')
      }
    });
  });


// события для перетаскиваемых эл-ов
dragItem.forEach(dragItem => {

    // начинатеся перетаскивание эл-та
    dragItem.addEventListener('dragstart', handlerDragstart)
});




// события для перетаскиваемых зон

// перетаскиваемый эл-нт попадает в допустимую цель сброса
dragZone.addEventListener('dragenter', handlerDragEnter)

// перетаскиваемый эл-т покидает допустимую цель сброса 
// dragZone.addEventListener('dragleave', handlerDragLeave)

// перетаскиваемый эл-т над допустимой целью сброса 
dragZone.addEventListener('dragover', handlerDragOver)

// перетаскиваемый эл-т сброшен 
dragZone.addEventListener('drop', handlerDrop)




// функции: 

let offsetX, offsetY;
let counter = 6;

// начинается перетаскивание элемента - получаю дата-айтем эл-та(2/4/6), получаю параметры курсора
function handlerDragstart(event) {
    event.dataTransfer.setData('dragItem', event.target.id)
    offsetX = event.offsetX;
    offsetY = event.offsetY;
}

//элемент попадает над допустимой целью сброса - отмена дефолтнова значения = возможность сбросить эл-т
function handlerDragEnter(event) {
    event.preventDefault();
}

//эл-нт над целью сброса - отмена дефолтнова значения = возможность сбросить эл-т
function handlerDragOver(event) {
    event.preventDefault();
}

//после отпускания эл-нт встает на нужное место в драг зоне при этом в хоум зоне создается такой же эл-нт
function handlerDrop(event) {
    const dragflag = event.dataTransfer.getData("dragItem")
    const dataItem = document.getElementById(dragflag)
    if (parseInt(dragflag)>5) {
        dataItem.style.top = (event.pageY - offsetY - dragZone.getBoundingClientRect().top) + 'px';
        dataItem.style.left = (event.pageX - offsetX - dragZone.getBoundingClientRect().left) + 'px';
    } else {
        const copy = dataItem.cloneNode(true)
        copy.id = (counter++).toString()
        copy.style.top = (event.clientY - offsetY - dragZone.getBoundingClientRect().top) + 'px' ;
        copy.style.left = (event.clientX - offsetX - dragZone.getBoundingClientRect().left) + 'px';
        copy.style.position = "absolute";
        dragZone.append(copy);
        copy.addEventListener('dragstart', handlerDragstart)
    }
}

// let currentResizer;

// resizer.forEach(el => {
//     el.addEventListener('mousedown', mousedown);

//     function mousedown(e) {
//       currentResizer = e.target;

//       let prevX = e.clientX;
//       let prevY = e.clientY;




//       window.addEventListener('mousemove', mousemove);
//       window.addEventListener('mouseup', mouseup);

//       function mousemove(e) {
//         const rect = el.
//       }

//       function mouseup() {

//       }

//     }
// })
