// console.log('Request Data...');

// setTimeout(() =>{
//     console.log('Preparing Data...');
//     const backendDate = {
//         server: 'aaaa',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(() =>{
//         backendDate.madified = true,
//         console.log('Data received', backendDate);

//     }, 2000)

// },2000)




// console.log('Request Data...');



// const promise = new Promise ((resolve, reject) =>{
//     setTimeout(() =>{
//     console.log('Preparing Data...');
//     const backendDate = {
//         server: 'aaaa',
//         port: 2000,
//         status: 'working'
//     }
//     resolve(backendDate)
//     }, 2000)
    

// })


// promise.then((data) =>{
//     // console.log('Promise resolved', data);
//     return new Promise ((resolve, reject) =>{
//         setTimeout(() =>{
//             data.modified = true
//             resolve(data)
//             // reject(data)
//         }, 2000)
//     })
// }).then(clientData =>{
//     console.log('Data recieved', clientData);
//     clientData.fromPromise = true
//     return clientData
// }).then(data =>{
//     console.log('Modified', data);
// })







let api = "http://api.giphy.com/v1/gifs/search?q="
let key = '5PuiJaXo634xvMpN7PtW2sECgugBDLQ1'
let secondStr = '&api_key=' + key 


const search = async() =>{
    let input = document.querySelector('#input')
    let url = api + input.value + secondStr + '&limit=10'

    let response = await fetch(url)
    let data = await response.json()

    let arr = data.data
    console.log(arr);

    let div = document.querySelector('.output')

    div.innerHTML = ''
    input.value = ''


    arr.forEach(el => {
        let ifrm = document.createElement('iframe')
        ifrm.src = el.embed_url
        div.append(ifrm)
    });

}








