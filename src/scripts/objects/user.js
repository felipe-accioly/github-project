const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    login: '',
    followers: '',
    following:'',
    repositories: [],
    events: [],

    setInfo(user){
        this.avatarUrl = user.avatar_url
        this.name = user.name
        this.bio = user.bio
        this.login = user.login
        this.followers = user.followers
        this.following = user.following
    },

    setRepositories(repositories){
        this.repositories = repositories
    },

    setEvents(events){
        this.events = events
    }
}

export { user }