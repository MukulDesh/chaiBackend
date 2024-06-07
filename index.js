require('dotenv').config()
const express = require('express')
const app = express() // app express ni banla ahe
const port = 8000

const githubData = {
        "login": "mukuldeshpande",
        "id": 6618700,
        "node_id": "MDQ6VXNlcjY2MTg3MDA=",
        "avatar_url": "https://avatars.githubusercontent.com/u/6618700?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/mukuldeshpande",
        "html_url": "https://github.com/mukuldeshpande",
        "followers_url": "https://api.github.com/users/mukuldeshpande/followers",
        "following_url": "https://api.github.com/users/mukuldeshpande/following{/other_user}",
        "gists_url": "https://api.github.com/users/mukuldeshpande/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/mukuldeshpande/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/mukuldeshpande/subscriptions",
        "organizations_url": "https://api.github.com/users/mukuldeshpande/orgs",
        "repos_url": "https://api.github.com/users/mukuldeshpande/repos",
        "events_url": "https://api.github.com/users/mukuldeshpande/events{/privacy}",
        "received_events_url": "https://api.github.com/users/mukuldeshpande/received_events",
        "type": "User",
        "site_admin": false,
        "name": null,
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 1,
        "public_gists": 0,
        "followers": 0,
        "following": 0,
        "created_at": "2014-02-07T18:57:21Z",
        "updated_at": "2020-05-20T21:17:00Z"
      }


app.get('/', (req, res) => {
   res.send('Hello World!')  // home page vr display karyla use hote te  req.send()
})


app.get('/twitter', (req, res) =>{
     res.send("mukuldeshpande@twitter");
} )

app.get('/login', (req, res)=>{
    res.send('<h1>please log in at chai or code</h1>')

})

app.get('/youtube', (req, res)=>{
    res.send('<h2>chai or code</h2>')

})

app.get('/github', (req, res)=>{
    res.json(githubData);
})

// you need to go the apllication to a production leval you need ti install env

app.listen(process.env.PORT, () => {
   console.log(`Example app listening on port ${port}`)
})