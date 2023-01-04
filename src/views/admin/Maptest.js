import { Map, Polyline } from 'react-amap';
function Maptest() {
const points = [{ longitude: 120.2, latitude: 30.3 }];  // 起点：杭州

const cities = [
    { longitude: 121.5, latitude: 31.2 },  // 上海
    { longitude: 113.3, latitude: 23.1 },  // 广州
    { longitude: 114.1, latitude: 22.2 },  // 深圳
    { longitude: 113.6, latitude: 34.8 },  // 郑州
    { longitude: 108.9, latitude: 34.2 },  // 西安
];
for (const city of cities) {
    points.push({ longitude: city.longitude, latitude: city.latitude });
}
const plugins = [
    'MapType',
    // 'Scale',
    'OverView',
    // 'ControlBar', // v1.1.0 新增
    {
      name: 'ToolBar',
      options: {
        visible: true,  // 不设置该属性默认就是 true
        onCreated(ins){
          console.log(ins);
        },
      },
    }
  ]
return (
    <>
            <Map plugins={plugins} amapkey={'bf7880049c04c36fa1ae25fcd1e2ffad'} center={{ longitude: 120, latitude: 30 }} zoom={4}>
                <Polyline path={points} />
                <Polyline path={points} />
                <Polyline path={points} />
                <Polyline path={points} />
                <Polyline path={points} />
                <Polyline path={points} />
            </Map>
        </>
        );
}

        export default Maptest;
