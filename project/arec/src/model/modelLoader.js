import {Darknet} from "darknet";


const darknet = new Darknet({
    weights:  "@/model/yolov3-tiny.weights",
    config:   "@/model/cfg/yolov3-tiny.cfg",
    namefile: "@/model/data/coco.names",
});

export default modelLoader;