const url = "https://covid19.mathdro.id/api";
let app = angular.module('myApp', []);

app.controller('myCtrl', ($scope, $http) => {

    $scope.title = "Stay Home Stay Safe";
    
    $http.get(url).then( (response) => {
        console.log(response);
        $scope.all_data = response.data;
    } , 
    
    (error) => {
        console.log(error);
    } )

    $scope.get_country = () => {

        let c = $scope.country;
        
        if(c == ""){
            return;
        }

        $http.get(`${url}/countries/${c}`).then( (response) => {
            console.log(response.data);
            $scope.cntri = response.data;
        }, 
        
        (error) => {
            console.log(error);
        } )
    }
})