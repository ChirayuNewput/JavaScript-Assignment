function MainPage() {
  this.initialise = () => {
    bind();
  };
  function bind() {
    const json = {
      // timelineContent: {
      //   profileSrc: '"/src/assets/image/avatar-1.png"',
      //   name: "mark",
      //   menuIcon: '"fas fa-ellipsis-v"',
      //   imageSrc:
      //     '"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7_k2aZbkrWj1tq7eIVHyWQ8p94tb1ThTzdg&usqp=CAU"',
      //   time: "30",
      //   likeIcon: '"fas fa-heart"',
      //   commentIcon: '"fas fa-comment"',
      //   shareIcon: '"fas fa-share-alt"',
      //   lorem:
      //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ualias harum magni ea rerum ipsum sint eum! Sunt, autem",
      // },
      aboutContent: {
        fullname: "Mark Zukerberg",
        gender: "Male",
        birth: "12-12-1995",
        maritial: "Married",
        location: "New York, USA",
        occupation: "Devloper",
        skills: "C# , JavaScript, Python",
        jobs: "Phoenixcoded",
      },
      photoContent: {
        imageOne:
          '"https://ableproadmin.com/6.1/html/files/plugins/gallery/img/thumb-1.jpg"',
        imageTwo:
          '"	https://ableproadmin.com/6.1/html/files/plugins/gallery/img/thumb-2.jpg"',
        imageThree:
          '"	https://ableproadmin.com/6.1/html/files/plugins/gallery/img/thumb-13.jpg"',
        imageFour:
          '"	https://ableproadmin.com/6.1/html/files/plugins/gallery/img/thumb-4.jpg"',
      },
      friendsContent: {
        name: "josephin Doe",
        image: '"/src/assets/image/profile-girl.png"',
        fullOccupation: "Software Engineer at phoenix",
      },
    };

    timelineDisplay(json);
    aboutDisplay(json);
    photosDisplay(json);
    friendsDisplay(json);
  }
}
//defining timeline display
function timelineDisplay(json) {
  $.get("/src/assets/data/timeline_content.json", function (json) {
    let url = "/src/assets/templates/timeline.mustache";
    $.get(url, function (data) {
      let template = Mustache.render(data, json);
      document.getElementById("div-tab-content-body").innerHTML = template;
      for (let i = 0; i < 2; i++) {
        document.getElementById("div-timeline-inner").innerHTML += template;
      }
    });
  });
}
//defining about display
function aboutDisplay(json) {
  $.get("/src/assets/data/about_content.json", function (json) {
    let url = "/src/assets/templates/about.mustache";
    $.get(url, function (data) {
      let template = Mustache.render(data, json);
      document.getElementById("div-tab-content-body").innerHTML += template;
    });
  });
}

//defining photos display
function photosDisplay(json) {
  $.get("/src/assets/data/photos_content.json", function (json) {
    let url = "/src/assets/templates/photos.mustache";
    $.get(url, function (data) {
      let template = Mustache.render(data, json);
      document.getElementById("div-tab-content-body").innerHTML += template;
    });
  });
}
// defining friends display
function friendsDisplay(json) {
  $.get("/src/assets/data/friends_content.json", function (json) {
    let url = "/src/assets/templates/friends.mustache";
    $.get(url, function (data) {
      let template = Mustache.render(data, json);
      document.getElementById("div-tab-content-body").innerHTML += template;
      for (let i = 0; i < 2; i++) {
        document.getElementById("div-friends-inner").innerHTML += template;
      }
    });
  });
}
