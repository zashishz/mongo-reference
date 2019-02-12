## Mongo DB

- Database

  - Collection
  - Collection
  - Collection

- Model -->Schema--> Instance
  Eg: User Model

```javascript
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/user_test", { useNewUrlParser: true });
mongoose.connection
  .once("open", () => console.log("Good to go!"))
  .on("error", e => console.warn("Error", e));
```

### Create Schema

```javascript
const mongoose, {Schema} = require('mongoose');

const UserSchema = new Schema({
    name: String
})

const User = mongoose.model('user', UserSchema);

export default User;


```

### Drop Schema

```javascript
mongoose.connection.collections.users.drop();
```
