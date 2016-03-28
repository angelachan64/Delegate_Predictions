var data = [  {state: "Iowa", trump_p: 10, trump_a: 7, cruz_p: 13, cruz_a: 8, kasich_p: 11, kasich_a: 1, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "New Hampshire", trump_p: 8, trump_a: 11, cruz_p: 8, cruz_a: 3, kasich_p: 11, kasich_a: 4, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "South Carolina", trump_p: 41, trump_a: 50, cruz_p: 50, cruz_a: 0, kasich_p: 6, kasich_a: 0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Nevada", trump_p: 13, trump_a: 14, cruz_p: 11, cruz_a: 6, kasich_p: 10, kasich_a: 1, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Alabama", trump_p: 19, trump_a: 36, cruz_p: 26, cruz_a: 13, kasich_p: 7, kasich_a:0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Alaska", trump_p: 9, trump_a: 14, cruz_p: 12, cruz_a: 14, kasich_p: 9, kasich_a:0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Arkansas", trump_p: 14, trump_a: 16, cruz_p: 21, cruz_a: 15, kasich_p: 6, kasich_a:0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Georgia", trump_p: 25, trump_a: 43, cruz_p: 41, cruz_a: 17, kasich_p: 18, kasich_a:0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Massachusetts", trump_p: 20, trump_a: 22, cruz_p: 12, cruz_a: 4, kasich_p: 21, kasich_a: 8, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Minnesota", trump_p: 12, trump_a: 8, cruz_p: 13, cruz_a: 13, kasich_p: 14, kasich_a: 0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4},  
	      {state: "Oklahoma", trump_p: 15, trump_a: 13, cruz_p: 19, cruz_a: 15, kasich_p: 8, kasich_a: 0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Tennessee", trump_p: 20, trump_a: 33, cruz_p: 31, cruz_a: 16, kasich_p: 9, kasich_a: 0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Texas", trump_p: 67, trump_a: 48, cruz_p: 104, cruz_a: 104, kasich_p: 31, kasich_a: 0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4},
	      {state: "Vermont", trump_p: 7, trump_a: 8, cruz_p: 5, cruz_a: 0, kasich_p: 8, kasich_a: 8, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Virginia", trump_p: 17, trump_a: 17, cruz_p: 18, cruz_a: 8, kasich_p: 19, kasich_a: 5, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Kansas", trump_p: 16, trump_a: 9, cruz_p: 20, cruz_a: 24, kasich_p: 10, kasich_a: 1, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Kentucky", trump_p: 21, trump_a: 17, cruz_p: 20, cruz_a: 15, kasich_p: 10, kasich_a: 7, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Louisiana", trump_p: 23, trump_a: 18, cruz_p: 22, cruz_a: 18, kasich_p: 8, kasich_a: 0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Maine", trump_p: 9, trump_a: 9, cruz_p: 9, cruz_a: 12, kasich_p: 11, kasich_a: 2, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Puerto Rico", trump_p: 8, trump_a: 0, cruz_p: 8, cruz_a: 0, kasich_p: 15, kasich_a: 0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Hawaii", trump_p: 7, trump_a: 11, cruz_p: 9, cruz_a: 7, kasich_p: 10, kasich_a: 0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Idaho", trump_p: 10, trump_a: 12, cruz_p: 13, cruz_a: 20, kasich_p: 9, kasich_a: 0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Michigan", trump_p: 25, trump_a: 25, cruz_p: 22, cruz_a: 17, kasich_p: 22, kasich_a: 17, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Mississippi", trump_p: 17, trump_a: 25, cruz_p: 19, cruz_a: 15, kasich_p: 7, kasich_a: 0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4},
	      {state: "Virgin Islands", trump_p: 0, trump_a: 1, cruz_p: 0, cruz_a: 1, kasich_p: 9, kasich_a: 0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "DC", trump_p: 7, trump_a: 0, cruz_p: 7, cruz_a: 0, kasich_p: 10, kasich_a: 9, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Guam", trump_p: 3, trump_a: 0, cruz_p: 3, cruz_a: 0, kasich_p: 6, kasich_a: 0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Florida", trump_p: 99, trump_a: 99, cruz_p: 99, cruz_a: 0, kasich_p: 99, kasich_a: 0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Illinois", trump_p: 39, trump_a: 54, cruz_p: 18, cruz_a: 9, kasich_p: 60, kasich_a: 6, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Missouri", trump_p: 42, trump_a: 37, cruz_p: 52, cruz_a: 15, kasich_p: 5, kasich_a: 0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "North Carolina", trump_p: 26, trump_a: 29, cruz_p: 29, cruz_a: 27, kasich_p: 25, kasich_a: 9, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Northern Marianas", trump_p: 0, trump_a: 9, cruz_p: 0, cruz_a: 0, kasich_p: 9, kasich_a: 0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Ohio", trump_p: 66, trump_a: 0, cruz_p: 66, cruz_a: 0, kasich_p: 66, kasich_a: 66, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "American Samoa", trump_p: 3, trump_a: 0, cruz_p: 3, cruz_a: 0, kasich_p: 6, kasich_a: 0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Arizona", trump_p: 58, trump_a: 58, cruz_p: 58, cruz_a: 0, kasich_p: 58, kasich_a: 0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Utah", trump_p: 9, trump_a: 0, cruz_p: 17, cruz_a: 40, kasich_p: 11, kasich_a:0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4},  

	      // April 1 and beyond... delegates won TBD then.
	      {state: "North Dakota", trump_p: 10, trump_a: 0, cruz_p: 10, cruz_a: 0, kasich_p: 9, kasich_a: 0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Wisonsin", trump_p: 18, trump_a: 0, cruz_p: 33, cruz_a: 0, kasich_p: 39, kasich_a:0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Colorado", trump_p: 11, trump_a: 0, cruz_p: 17, cruz_a: 0, kasich_p: 15, kasich_a:0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Wyoming", trump_p: 6, trump_a: 0, cruz_p: 7, cruz_a: 0, kasich_p: 4, kasich_a:0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "New York", trump_p: 58, trump_a: 0, cruz_p: 6, cruz_a: 0, kasich_p: 45, kasich_a:0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Connecticut", trump_p: 15, trump_a: 0, cruz_p: 4, cruz_a: 0, kasich_p: 21, kasich_a:0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Deleware", trump_p: 16, trump_a: 0, cruz_p: 0, cruz_a: 0, kasich_p: 16, kasich_a:0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Maryland", trump_p: 17, trump_a: 0, cruz_p: 3, cruz_a: 0, kasich_p: 32, kasich_a:0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Pennsylvania", trump_p: 40, trump_a: 0, cruz_p: 19, cruz_a: 0, kasich_p: 48, kasich_a:0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Rhode Island", trump_p: 9, trump_a: 0, cruz_p: 4, cruz_a: 0, kasich_p: 10, kasich_a:0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Indiana", trump_p: 51, trump_a: 0, cruz_p: 57, cruz_a: 0, kasich_p: 9, kasich_a:0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Nebraska", trump_p: 0, trump_a: 0, cruz_p: 36, cruz_a: 0, kasich_p: 36, kasich_a:0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "West Virginia", trump_p: 34, trump_a: 0, cruz_p: 34, cruz_a: 0, kasich_p: 0, kasich_a:0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Oregon", trump_p: 9, trump_a: 0, cruz_p: 11, cruz_a: 0, kasich_p: 13, kasich_a:0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Washington", trump_p: 15, trump_a: 0, cruz_p: 16, cruz_a: 0, kasich_p: 16, kasich_a:0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "California", trump_p: 81, trump_a: 0, cruz_p: 30, cruz_a: 0, kasich_p: 151, kasich_a:0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "Montana", trump_p: 0, trump_a: 0, cruz_p: 27, cruz_a: 0, kasich_p: 27, kasich_a:0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "New Jersey", trump_p: 51, trump_a: 0, cruz_p: 0, cruz_a: 0, kasich_p: 51, kasich_a:0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4},
	      {state: "New Mexico", trump_p: 7, trump_a: 0, cruz_p: 12, cruz_a: 0, kasich_p: 9, kasich_a:0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	      {state: "South Dakota", trump_p: 0, trump_a: 0, cruz_p: 29, cruz_a: 0, kasich_p: 29, kasich_a:0, 
	       clinton_a:3, clinton_p:7, sanders_a: 6, sanders_p: 4}, 
	   ];
