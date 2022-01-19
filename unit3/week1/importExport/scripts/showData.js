async function getData(url) {
    
    let res = await fetch(url);
    let data = res.json();

    return data;
}

function append(data, place) {

    data.forEach(({title,image,price}) => {

        let div = document.createElement('div');

        let p_name = document.createElement('p');
        let p_price = document.createElement('p');
        let img = document.createElement('img');

        img.src = image;
        p_price.innerText = price;
        p_name.innerText = title;

        div.append(img, p_name, p_price);

        place.append(div);

    })
    

}

export { getData, append}