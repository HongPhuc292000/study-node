const Course = require('../models/Course');

class CourseController {
    index(req, res, next) {
        const courseName = req.params.slug;
        Course.findOne({ slug: courseName })
            .then((course) => {
                res.render('courses/course');
            })
            .catch(next);
    }
}

module.exports = new CourseController();
