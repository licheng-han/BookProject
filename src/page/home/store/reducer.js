import {fromJS} from 'immutable';

const defaultState = fromJS({
    topicList: [
        {
            id: "1",
            title: "ddddd",
            img: "https://oimagea6.ydstatic.com/image?id=6765010721196479494&product=adpublish&w=300&h=200&sc=0&rm=2&gsb=0&gsbd=60"
        },
        {
            id: "2",
            title: "wwww",
            img: "https://oimagea6.ydstatic.com/image?id=6765010721196479494&product=adpublish&w=300&h=200&sc=0&rm=2&gsb=0&gsbd=60"
        }
    ],
    articleList:[{
        id:"1",
        imgUrl:"https://oimagea5.ydstatic.com/image?id=-5285314247220546696&product=adpublish&w=300&h=200&sc=0&rm=2&gsb=0&gsbd=60",
        title:"魔道祖师：番外篇之忘羡甜向小日常（四十一）",
        desc:"路过彩衣镇时魏无羡看到街边有卖糖人的，非扯着蓝湛的袖子过去买。 蓝忘机在一旁提醒道：“魏婴，你最近牙疼，还是少吃些的好。” 魏无羡当作没听见，依..."
    },{
        id:"2",
        imgUrl:"https://oimagea5.ydstatic.com/image?id=-5285314247220546696&product=adpublish&w=300&h=200&sc=0&rm=2&gsb=0&gsbd=60",
        title:"魔道祖师：番外篇之忘羡甜向小日常（四十一）",
        desc:"路过彩衣镇时魏无羡看到街边有卖糖人的，非扯着蓝湛的袖子过去买。 蓝忘机在一旁提醒道：“魏婴，你最近牙疼，还是少吃些的好。” 魏无羡当作没听见，依..."
    },{
        id:"3",
        imgUrl:"https://oimagea5.ydstatic.com/image?id=-5285314247220546696&product=adpublish&w=300&h=200&sc=0&rm=2&gsb=0&gsbd=60",
        title:"魔道祖师：番外篇之忘羡甜向小日常（四十一）",
        desc:"路过彩衣镇时魏无羡看到街边有卖糖人的，非扯着蓝湛的袖子过去买。 蓝忘机在一旁提醒道：“魏婴，你最近牙疼，还是少吃些的好。” 魏无羡当作没听见，依..."
    },{
        id:"4",
        imgUrl:"https://oimagea5.ydstatic.com/image?id=-5285314247220546696&product=adpublish&w=300&h=200&sc=0&rm=2&gsb=0&gsbd=60",
        title:"魔道祖师：番外篇之忘羡甜向小日常（四十一）",
        desc:"路过彩衣镇时魏无羡看到街边有卖糖人的，非扯着蓝湛的袖子过去买。 蓝忘机在一旁提醒道：“魏婴，你最近牙疼，还是少吃些的好。” 魏无羡当作没听见，依..."
    },{
        id:"5",
        imgUrl:"https://oimagea5.ydstatic.com/image?id=-5285314247220546696&product=adpublish&w=300&h=200&sc=0&rm=2&gsb=0&gsbd=60",
        title:"魔道祖师：番外篇之忘羡甜向小日常（四十一）",
        desc:"路过彩衣镇时魏无羡看到街边有卖糖人的，非扯着蓝湛的袖子过去买。 蓝忘机在一旁提醒道：“魏婴，你最近牙疼，还是少吃些的好。” 魏无羡当作没听见，依..."
    },{
        id:"6",
        imgUrl:"https://oimagea5.ydstatic.com/image?id=-5285314247220546696&product=adpublish&w=300&h=200&sc=0&rm=2&gsb=0&gsbd=60",
        title:"魔道祖师：番外篇之忘羡甜向小日常（四十一）",
        desc:"路过彩衣镇时魏无羡看到街边有卖糖人的，非扯着蓝湛的袖子过去买。 蓝忘机在一旁提醒道：“魏婴，你最近牙疼，还是少吃些的好。” 魏无羡当作没听见，依..."
    }]
});
export default (state = defaultState, action) => {
    return state;
}