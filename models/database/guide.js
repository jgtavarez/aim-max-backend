const { Schema, model } = require('mongoose')

const GuideSchema = Schema({
    skills:{
        type: Array,
        require: [true, 'skills are required'],
    },
    summary:{
        type: Array,
        require: [true, 'summary is required'],
    },
    list:{
        type: Array,
        require: [true, 'list is required'],
    },
})

module.exports = model('guides', GuideSchema)