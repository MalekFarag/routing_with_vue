export default{
    template: `
    <div>
        <h1> {{message}} </h1>
        <button @click='registerUser()'> Swag time </button>
    </div>`,

    data: function(){
        return{
            message: 'welcome to super awesome app'
        }
    },

    methods: {
        registerUser(){
            console.log('registered for swag');
        }
    }
}