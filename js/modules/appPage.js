export default{
    template: 
    `
    <div>
        <h1> App page </h1>
        <form id='form'>
            <label for='username'>Username</label>
            <input v-model='uname' type='text' name='username' required placeholder='username'>

            <label for='password'>password</label>
            <input v-model='pword' type='text' name='password' required placeholder='password'>

            <input @click='submitData' type='submit' value='submit'>
        </form>
    </div>
    `,

    data: function(){
        return{
            uname: '',
            pword: ''
        }
    },

    methods: {
        submitData(){
            //call api when hitting submit
            //reference mailer test from trevor's repo
            debugger;
            
        }
    }
}