import NavBar from '@/app/components/Navbar';
import ChartSection from '@/app/components/ChartSection';
import MoistureChart from '@/app/components/MoistureChart';
import TempChart from '@/app/components/TempChart';
import HumidChart from '@/app/components/HumidChart';
import PredictionChart from '@/app/components/PredictionChart';

export default function Home() {
  const humidity = "Humidity";
  const moisture = "Moisture";
  const temperature = "Temperature";
  const prediction = "Prediction";
  return (
    <main className="bg-gray-50 min-h-screen">
      
      <div className="max-w-7xl mx-auto mt-8">
        <ChartSection chartPosition="left" chartComponent={<MoistureChart />} description={moisture} />
        <ChartSection chartPosition="right" chartComponent={<TempChart />} description={temperature} />
        <ChartSection chartPosition="left" chartComponent={<HumidChart />} description={humidity} />
        <ChartSection chartPosition="right" chartComponent={<PredictionChart />} description={prediction} />
      </div>
    </main>
  );
}
