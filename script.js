const dragZone = document.querySelector('.block__dragzone');
const dragItem = document.querySelectorAll('.dragItem');
const homeZone = document.querySelector('.block__tables');


// события для перетаскиваемых эл-ов
dragItem.forEach(dragItem => {
    // начинатеся перетаскивание эл-та
    dragItem.addEventListener('dragstart', handlerDragstart)
    // завершается перетаскивание эл-та
    dragItem.addEventListener('dragend', handlerDragend)
    // длиться перетаскивание эл-та
    // dragItem.addEventListener('drag', handlerDrag)
});

// события для перетаскиваемых зон
// перетаскиваемый эл-нт попадает в допустимую цель сброса
dragZone.addEventListener('dragenter', handlerDragEnter)
// перетаскиваемый эл-т покидает допустимую цель сброса 
// dragZone.addEventListener('dragleave', handlerDragLeave)

//для добавления старого эл-та
// homeZone.addEventListener('dragleave', handlerHomeLeave)
// homeZone.addEventListener('drop', handlerHomeDrop)

// перетаскиваемый эл-т над допустимой целью сброса 
dragZone.addEventListener('dragover', handlerDragOver)
// перетаскиваемый эл-т сброшен 
dragZone.addEventListener('drop', handlerDrop)

let offsetX, offsetY;

function handlerDragstart(event) {
    event.dataTransfer.setData('dragItem', this.dataset.item)
    offsetX = event.offsetX;
    offsetY = event.offsetY;
}

// завершается перетаскивание эл-та
function handlerDragend(event) {
}


function handlerDragEnter(event) {
    event.preventDefault();
}

function handlerDragOver(event) {
    event.preventDefault();
}

function handlerDrop(event) {
    // homeZone.append()
    const dragflag = event.dataTransfer.getData("dragItem")
    const dataItem = document.querySelector(`[data-item="${dragflag}"]`)
    // homeZone.append(dataItem);
    const clone = dataItem.cloneNode(true);
    // clone.style.position = "absolute";
    clone.style.top = (event.pageY - offsetY - 100) + 'px' ;
    clone.style.left = (event.pageX - offsetX - 440) + 'px';
    clone.style.position = "absolute";
    dragZone.append(clone);

    // clone.addEventListener('dragstart', handlerDragstart)
    // clone.addEventListener('dragend', handlerDropClone)
}

// function handlerDropClone(event) {
//     this.style.top = (event.pageY - offsetY - 100) + 'px' ;
//     this.style.left = (event.pageX - offsetX - 440) + 'px';
//     this.style.position = "absolute";
// }

