import {
  TimerIcon,
  VideoIcon,
  DownloadIcon,
  Star,
  StarHalf,
} from "lucide-react";
const CardCurso = () => {
  return (
    <div className="flex flex-col  gap-y-3 border-gray-200 rounded-lg p-5 shadow-lg bg-card dark:border-gray-800">
      <img
        src="/motor.jpeg"
        alt="profesor"
        className="w-full h-[200px] object-cover rounded-lg"
      />
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-center items-center">
          <TimerIcon name="mdi:timer" className="w-5 h-5" />
          <p className="text-sm">22 hr 30 min</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <VideoIcon name="mdi:video" className="w-5 h-5" />
          <p className="text-sm">22 hr 30 min</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <DownloadIcon name="mdi:download" className="w-5 h-5" />
          <p className="text-sm">22 hr 30 min</p>
        </div>
      </div>
      <h2 className="text-2xl font-bold">Bombinado Motores electricos</h2>
      <p className="text-lg">$100.000 / $200.000</p>
      <hr />
      <div className="grid grid-cols-3 justify-between 5xl:gap-x-5 items-center">
        <div className="w-14 h-14 rounded-full bg-gray-100 drop-shadow-sm"></div>
        <p className="text-md">Vicente Berroeata</p>
        <div className="flex flex-row justify-between items-center max-w-[120px]">
          5 <StarHalf name="mdi:star" />
          <Star name="mdi:star" />
          <Star name="mdi:star" />
          <Star name="mdi:star" />
          <Star name="mdi:star" />
        </div>
      </div>
    </div>
  );
};
export default CardCurso;
