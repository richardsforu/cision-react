
// service

const store = {

    subscribe(listener) {
        //....
    },

    getState() {
        return {
            topics: [
                'java',
                'java script',
                'python',
                'react-js'
            ],

            comments: {
                'java': [
                    'Make Java as your mother tounge',
                    'bla bla'
                ],
                'react-js': [
                    'React is a library',
                    'I like its Virtual DOM'
                ]

            }
        }
    }
}


export default store;