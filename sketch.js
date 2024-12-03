 // The video
    let video;
    // For displaying the label
    let label = "waiting...";
    // The classifier
    let classifier;
    let modelURL = 'https://teachablemachine.withgoogle.com/models/SrmjtP7Wf/';

    // STEP 1: Load the model!
    function preload() {
      classifier = ml5.imageClassifier(modelURL + 'model.json');
    }

    function setup() {
      createCanvas(640, 520);
      // Create the video
      video = createCapture(VIDEO);
      video.hide();
      // STEP 2: Start classifying
      classifyVideo();
    }

    // STEP 2 classify the video!
    function classifyVideo() {
      classifier.classify(video, gotResults);
    }

    function draw() {
      background(0);

      // Draw the video
      image(video, 0, 0);

      // STEP 4: Draw the label
      textSize(32);
      textAlign(CENTER, CENTER);
      fill(255);
      text(label, width / 2, height - 16);

      // Pick an emoji, the "default" is train
      let emoji = "❓"; // Default emoji if no match is found
      if (label == "Dog") {
        emoji = "🐶";
      } else if (label == "Eagle") {
        emoji = "🦅";
      } else if (label == "Deer") {
        emoji = "🦌";
      } else if (label == "Cat") {
        emoji = "🐱";
      } else if (label == "Zebra") {
        emoji = "🦓";
      } else if (label == "Squirrel") {
        emoji = "🐿️";
      } else if (label == "Penguin") {
        emoji = "🐶";
      } else if (label == "Horse") {
        emoji = "🐴";
      } else if (label == "Elephant") {
        emoji = "🐘";
      } else if (label == "Gorilla") {
        emoji = "🦍";
      }

      // Draw the emoji
      textSize(256);
      text(emoji, width / 2, height / 2);
    }

    // STEP 3: Get the classification!
    function gotResults(error, results) {
      // Something went wrong!
      if (error) {
        console.error(error);
        return;
      }
      // Store the label and classify again!
      label = results[0].label;
      classifyVideo();
    }