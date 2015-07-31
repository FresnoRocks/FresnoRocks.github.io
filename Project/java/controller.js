app.controller('MainController',['$scope', function($scope){
    $scope.title = "All Projects";

    $scope.projects = [{
        projectName:"meow",
        projectDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley " +
        "of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic " +
        "typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum" +
        " passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        name:"Joe Dirt",
        photo:"img/dog.jpg",
        name2:"James Kinler",
        photo2:"img/swimming.jpg",
        name3:"Tony Romo",
        photo3:"img/swimming.jpg",
        name4:"Magic Johnson",
        photo4:"img/swimming.jpg"

    },
        {
            projectName:"meow",
            projectDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley " +
            "of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic " +
            "typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum" +
            " passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            name:"Bob Shirk",
            photo:"img/rawr.png"
        },
        {
            projectName:"meow",
            projectDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley " +
            "of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic " +
            "typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum" +
            " passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            name:"Michael Jordan",
            photo:"img/swimming.jpg"
        }
    ];





    $scope.saveTeamMember = function(pn,pd,n,ph,n2,ph2,n3,ph3,n4,ph4){

        $scope.projects.push({
            projectName:pn,
            projectDescription:pd,
            name:n,
            photo:ph,
            name2:n2,
            photo2:ph2,
            name3:n3,
            photo3:ph3,
            name4:n4,
            photo4:ph4,

        });
    };

    $scope.deleteProject = function(index){
        $scope.projects.splice (index, 1);
    };

    $scope.updatesTeam = function(index,pn,pd,n,ph,n2,ph2,n3,ph3,n4,ph4){
        $scope.projects[index].projectName = pn || $scope.projects[index].projectName;
        $scope.projects[index].projectDescription = pd || $scope.projects[index].projectDescription;
        $scope.projects[index].name = n || $scope.projects[index].name;
        $scope.projects[index].photo = ph || $scope.projects[index].photo;
        $scope.projects[index].name2 = n2 || $scope.projects[index].name2;
        $scope.projects[index].photo2 = ph2 || $scope.projects[index].photo2;
        $scope.projects[index].name3 = n3 || $scope.projects[index].name3;
        $scope.projects[index].photo3 = ph3 || $scope.projects[index].photo3;
        $scope.projects[index].name4 = n4 || $scope.projects[index].name4;
        $scope.projects[index].photo4 = ph4 || $scope.projects[index].photo4;

    };



}]);