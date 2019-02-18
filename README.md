# UpStarMusic

Starter Repo for a MongoDB course on Udemy

You can download this repository by using the green `Clone or Download` button on the right hand side of this page. This will present you with the option to either clone the repository using Git, or to download it as a zip file.

If you want to download it using git, copy paste the link that is presented to you, then run the following at your terminal:

```
git clone https://github.com/StephenGrider/UpStarMusic.git
cd UpStarMusic
npm install
```

```javascript
> show dbs
admin         0.000GB
conduit       0.000GB
config        0.000GB
local         0.000GB
upstar_music  0.000GB

use upstar_music

db.artists.createIndex({name: "text"})

```
