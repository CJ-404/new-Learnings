let dragged,
    childs = ["one", "two", "three", "four", "five"];

document.addEventListener("drag", evt => {
    console.log("dragging");
});

document.addEventListener("dragstart", evt => {
    dragged = evt.target;
    evt.target.classList.add("dragging");
});

document.addEventListener("dragend", evt => {
    evt.target.classList.remove("dragging");
});

document.addEventListener("dragover", evt => {
    evt.preventDefault();
});

function classNameToIndex(name) {
    switch (name) {
        case ("one"):
            return 0;
        case ("two"):
            return 1;
        case ("three"):
            return 2;
        case ("four"):
            return 3;
        case ("five"):
            return 4;
    }
}

function swap(to, from) {
    let temp = childs[to];
    childs[to] = childs[from];
    childs[from] = temp;
}

function swapping_elements(evt) {

    evt.preventDefault();
    if (evt.target.classList.contains("dragzone")) {
        evt.target.classList.remove("dragover");

        let from = dragged.parentNode,
            to = evt.target,
            tochild,
            indexFrom,
            indexTo;

        indexFrom = classNameToIndex(from.classList[0]);
        indexTo = classNameToIndex(to.classList[0]);
        tochild = document.querySelector("#" + childs[indexTo]);

        swap(indexTo, indexFrom);

        from.removeChild(dragged);
        // console.log(tochild, dragged);
        to.removeChild(tochild);
        // setTimeout(function(){from.appendChild(tochild);},1000,tochild)
        from.appendChild(tochild);
        to.appendChild(dragged);
        // setTimeout(function(){to.appendChild(dragged);},1000,dragged)

    }

}

document.addEventListener("dragenter", evt => {
    if (evt.target.classList.contains("dragzone")) {
        evt.target.classList.add("dragover");
    }
    if (dragged.parentNode !== evt.target) {
        swapping_elements(evt);
    }

});

document.addEventListener("dragleave", evt => {
    if (evt.target.classList.contains("dragzone")) {
        evt.target.classList.remove("dragover");
    }
});



// document.addEventListener("drop", swapping_elements);