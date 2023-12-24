let images = ['Aerobatic5.jpg','OIP.jpeg']
let titletexts =['VLJ (Very Light Jets)', 'Aerobatic']
let descr = ['These planes are mainly used for flights that are 40 to 80 minutes in duration. As such, they do not offer a separate lavatory compartment but only an emergency style toilet with a privacy curtain. These planes are still a relatively new concept. The first design, the Cessna Citation Mustang, wasn’t produced until November of 2006. These jets are the lightest business jets on the market for air taxi services.',
'the pilots require hours and hours of advanced training. If they have a military background, this can reduce the learning curve significantly. Accustoming oneself to the g-forces and disorientation that occurs under intense acrobatic performances is something that is much easier if they went through years of flight school and spent significant time in military fighter jets.']


let container = document.createElement('div');
// let btn = document.getElementById('btn');
document.body.appendChild(container);
container.style.textAlign= 'center';
function element(images, titletexts, descr)
{
    //element
    let card = document.createElement('div');
    let img = document.createElement('img');
    let title = document.createElement('h2');
    let discription = document.createElement('p');
    
    

    //content
    img.src = images;
    let text=document.createTextNode(titletexts);
    let des_content = document.createTextNode(descr);

    title.appendChild(text);
    discription.appendChild(des_content);

    //style
    card.style.width= '400px';
    card.style.borderRadius= '25px';
    card.style.height= '410px';
    card.style.background= '#6D6875';
    card.style.color= '#fff';
    card.style.appearance= '';


    card.style.margin= '15px';
    card.style.display= 'inline-block';
    img.style.width= '100%';
    img.style.borderRadius ='25px';

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(discription);
    // card.appendChild(btn);

    container.appendChild(card);

}
for(let i=0; i<2; i++)
{
    element(images[i], titletexts[i], descr[i]);
}