const cardsData=[{
    id:1,
    name:"1",
    image:"assets/img1.png"
},
{
    id:2,
    name:"1",
    image:"assets/img1.png"
},
{
    id:3,
    name:"2",
    image:"assets/img2.png"
},
{
    id:4,
    name:"2",
    image:"assets/img2.png"
},
{
    id:5,
    name:"3",
    image:"assets/img3.png"
},
{
    id:6,
    name:"3",
    image:"assets/img3.png"
},
{
    id:7,
    name:"4",
    image:"assets/img4.png"
},
{
    id:8,
    name:"4",
    image:"assets/img4.png"
},
{
    id:9,
    name:"5",
    image:"assets/img5.png"
},
{
    id:10,
    name:"5",
    image:"assets/img5.png"
},
{
    id:11,
    name:"6",
    image:"assets/img6.png"
},
{
    id:12,
    name:"6",
    image:"assets/img6.png"
},
{
    id:13,
    name:"7",
    image:"assets/img7.png"
},
{
    id:14,
    name:"7",
    image:"assets/img7.png"
},
{
    id:15,
    name:"8",
    image:"assets/img8.png"
},
{
    id:16,
    name:"8",
    image:"assets/img8.png"
},
]

const shuffledCards = cardsData
  .map(card => ({ ...card, random: Math.random() })) // Add a random key
  .sort((a, b) => a.random - b.random)              // Sort by the random key
  .map(({ random, ...card }) => card);   



// const getimages=()=>{
//    return fetch('https://jsonplaceholder.typicode.com/photos').then(res=>res.json()).then(data=>cards.map(card=>({...card,image:data.url})))
// }
export const cards= shuffledCards.map(card =>({
    ...card, isFlipped:false,matched:false
}))

