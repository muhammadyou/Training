angular.module("MyServices", [])

    .factory("NFVTelcoCourses", function() {
        var name = "";

        return {
            setName: function(coursename){
                name = coursename
            },
            getName: function(){
                return name;
            }
        }


    })




