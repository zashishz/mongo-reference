# mongo-reference
This project contanins two branches
* Mongo refrence queries on **master** branch
* Some Advanced Queries using Operators of Mongo into **upstar_music** branch

## Use below command to create an index for text search into mongo fields
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
