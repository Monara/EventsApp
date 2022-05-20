import Tab from './components/Tab';
import Header from './components/Header';

const App = () => {

  //different content width based on screen size
  return (
    <div>
      <Header />
      <div className='bg-indigo-50 flex flex-col items-center'>
        <div className='2xl:w-9/12 xl:w-4/5 lg:w-10/12 md:w-10/12 sm:w-10/12'>
          <Tab />
        </div>
      </div>
    </div>
  );
}

export default App;
