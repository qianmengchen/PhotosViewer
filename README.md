# PhotosViewer

Create an app that does the following:

- Loads a JSON list from the following URL:
- <https://jsonplaceholder.typicode.com/photos>
- The JSON objects in the list have the following fields: { "albumId": 1, "id": 28, "title": "this is the title", "url": "<http://placehold.it/600/392537>", "thumbnailUrl": “<http://placehold.it/150/bcf316>” hello }, …
- Displays the images described by the JSON in a list
- The list should use the thumbnail url (“thumbnailUrl”) specified in the JSON
- When an image cell is single tapped, a new screen should come up displaying the full image url (“url”)
- When the full screen image is present there should be an option to remove the image.

(OPTIONAL)

- Display 2 image list cells per row

note:

- You do not need to implement error handling, assume that none of the properties in the JSON can be null
- The “id” field is unique
- The thumbnail size is 150 x 150
- The full image size is 600 x 600



## Instructions

```bash
$ npm install
$ npm start
```

