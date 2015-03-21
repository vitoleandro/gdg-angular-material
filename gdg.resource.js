(function() {
    gdgModule.factory("Users", function($resource) {
        var url = 'http://jsonplaceholder.typicode.com/users/:id';
        return $resource(url, { id: "@id" }, {
            update: {
                method: "PUT"
            },
         delete: {
                method: "DELETE"
            }
        });
    });
}());