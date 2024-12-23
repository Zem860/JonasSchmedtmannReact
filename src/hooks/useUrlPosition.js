  import { useSearchParams } from "react-router-dom";
  export function useUrlPosition(){
    const [searchParams] = useSearchParams();
    const lat = parseFloat(searchParams.get('lat'));
    const lng = parseFloat(searchParams.get('lng'));
    return [lat,lng]
  }

  //只是一個普通使用reactRouter的function基本上就是從param裡面將querystring的值抓出來返回而已