const speakersArray = [
  {
    name: 'Alexander',
    position: 'Software Engineer & Video Game Programmer',
    description: '5 years of expericence developing games and responsible for shipping Triple A titles, which are hopefully not false claims ironically',
    imageLink: 'assets/images/Alex.jpeg',
  },
  {
    name: 'Khalid',
    position: 'Software Engineer & Data Analyst Expert',
    description: '5 years of expericence of big data analysis and data matching of okcupid',
    imageLink: 'assets/images/khalid.jpg',
  },
  {
    name: 'James',
    position: '',
    description: 'Exploring the future of media in Facebooks first Virtual Reality app a place to discover and enjoy 360 photos and videos on Gear VR',
    imageLink: 'assets/images/james.jpg',
  },
  {
    name: 'Hunter',
    position: 'Software Engineer',
    description: 'Software Engineer at Nvidia corps, chief architect engineer responsible for DLSS algorithms in Nvidia graphics cards',
    imageLink: 'assets/images/hunter.jpg',
  },
  {
    name: 'James',
    position: '',
    description: 'Exploring the future of media in Facebooks first Virtual Reality app a place to discover and enjoy 360 photos and videos on Gear VR',
    imageLink: 'assets/images/james.jpg',
  },
  {
    name: 'Khalid',
    position: 'Software Engineer & Data Analyst Expert',
    description: '5 years of expericence of big data analysis and data matching of okcupid',
    imageLink: 'assets/images/khalid.jpg',
  },
];

const speakersDOMElement = document.querySelector('.speakers');
(() => {
  speakersDOMElement.innerHTML = '';
  let displayProps = '';
  for (let i = 0; i < speakersArray.length; i += 1) {
    speakersDOMElement.innerHTML = `${speakersDOMElement.innerHTML}
    <li class="col-12 col-md-6 ${displayProps}">
    <div class="row mb-5 p-4 bg-white">
      <div class="col-3 speaker-block pr-0 pl-0">
        <img class="speaker-avatar" src=${speakersArray[i].imageLink} alt="Speaker">
      </div>
      <div class="col-9 speaker-block pr-0 pl-4">
        <h3 class="mb-1 section-title font-weight-bold">${speakersArray[i].name}</h3>
        <p class="orange font-italic">${speakersArray[i].position}</p>
        <hr class="hr-speakers ml-0 mb-3">
        <p>${speakersArray[i].description}</p>
      </div>
      </div>
     </div>
    </li>`;

    if (i === 1) {
      displayProps = 'd-none d-md-block';
      speakersDOMElement.innerHTML = `${speakersDOMElement.innerHTML}
      <li class="more-speakers col-12 text-center mb-5 border d-block d-md-none">
      <a data-toggle="collapse" data-target="#demo" href="#" class="text-uppercase btn rounded-0 pr-5 pl-5 pt-2 pb-2">
        More <i class="fas fa-angle-down orange"></i>
      </a>
      </li>`;
    }
  }
})();
