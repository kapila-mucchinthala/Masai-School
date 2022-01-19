var data = {
    marks: [],
    addMarks: function (name, maths, science, social) {
        this.marks.push({ name: name, maths: maths, science: science, social: social });

    }

}
data.addMarks("Nrupul", 30, 40, 50);
data.addMarks("Prateek", 20, 10, 10);
data.addMarks("Yogesh", 40, 20, 20);
data.addMarks("Aman",10, 20, 40);
data.addMarks("Albert", 25, 15, 25);

console.log(data.marks);


