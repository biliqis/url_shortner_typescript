export type Url {
    urlPath: String,
    longUrl: String,
    shortUrl: String,
    Hits: {
      type:Number,
      default:0},
    usersVisited: [{Array: any}]
    lastAccessedOn: Date,
  }
