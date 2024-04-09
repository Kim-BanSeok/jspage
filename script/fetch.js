import fetch from 'node-fetch';

fetch('https://api.thedogapi.com/v1/breeds')
.then(response => response.json())
.then(async data => {
  const name = data.map(item => item.name);
  console.log(name);
  const idAndName = data.map(item => ({id: item.id, name: item.name}))
  console.log(idAndName);

 // let images = [];
//  for( const item of data ){
//  const result = {
////    id : item.id,
//    name : item.name,
 //   imag_url: await getImageFromImageID(item.reference_image_id)
 // }
 // console.log(result);
 // images.push(result);
 // }

  const promiseImage = data.map(item => new Promise((resolve, reject) => {
    getImageFromImageID(item.reference_image_id)
    .then((image_url )=> {
      resolve({
      id: item.id,
      name: item.name,
      imag_url: image_url
    })
  })
}))
return Promise.all(promiseImage);

})
.catch(err =>console.error(err))

async function getImageFromImageID(referenceImageId){
  try {
    // 강아지 종의 이미지 정보를 가져옵니다.
    const responseImage = await fetch(`https://api.thedogapi.com/v1/images/${referenceImageId}`);
    const ImageData = await responseImage.json();
    console.log(ImageData);
    // 강아지 종의 정보와 이미지 URL을 반환합니다.
    return ImageData.url;
  } catch (error) {
    // 오류가 발생하면 콘솔에 오류 메시지를 출력합니다.
    console.error('오류 발생:', error);
    return null;
  }
}