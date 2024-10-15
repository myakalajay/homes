import '../styles/allpages.css';
import '../styles/try-calculator.css';
import '../styles/sidemenu.css';
import '../styles/footer.css';
import '../styles/calculator.css';
import '../styles/Dashboard.css';
import '../styles/PreApproval.css';
import '../styles/Popup.css';
import '../styles/pdf.css';
import '../styles/terms.css';
import '../styles/Support.css';
import '../styles/Sitemap.css';
import '../styles/Innerpages.css';
import '@fontsource/nunito-sans'; // Defaults to weight 400.
import '@fontsource/nunito-sans/400.css'; // Normal weight
import '@fontsource/nunito-sans/700.css'; // Bold weight
// import '../styles/calculatorsec.css';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import HomeBanner from '@/components/HomeBanner';
import Idealproperty from '@/components/IdealProperty';
import MonthlyPayment from '@/components/MonthlyPayment';
import Trycalculator from '@/components/TryCalculator';
import LendingJourney from '@/components/LendingJourney';
import SideMenu from '@/components/SideMenu';
import Navigating from '@/components/Navigating';
import ScrollText from '@/components/scrollText';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from '@/redux/store';
import Cookies from 'js-cookie';
import { logout, setAuthState, setLoginData } from '@/redux/authSlice';
import Affordabilitynav from '../page/Affordabilitynav';
import Registerborrower from './Registerborrower';
import Professionals from './Professionals';
import Conventional from './Conventional';
import Amrloans from './Amrloans';
import Fhaloans from './Fhaloans';
import Valoans from './Valoans';
import Usdaloans from './Usdaloans';
import Nonqmloans from './Nonqmloans';
import HomeRefinancing from './HomeRefinancing';
import CashoutRefinancing from './CashoutRefinancing';
import Equity from './Equity';
import Refinancing from './Refinancing';
import Monthlypayment from './Monthlypayment';
import MortgageGlossary from './MortgageGlossary';
import Refinancecalculator from './Refinancecalculator';
import Consolidate from './Consolidate';
import Homebuyer from './Homebuyer';
import Blog from './Blog';
import About from './About';
import Faq from './Faq';
import MortgageLoan from './MortgageLoan';
import MortageResources from './MortageResources';
import CalculatorSection from './CalculatorSection';
import Privacy from './Privacy';
import Terms from './Terms';
import Pdf from './portal/mlo/Pdf';
import AffordabilityCalculator from './AffordabilityCalculator';
// import Chat from '@/components/Chat';
import DashBoard from './portal/user/DashBoard';
import PreApprovalPage from './PreApprovalPage';
import Support from './Support';
import Homeloan from './Homeloan';
import Navpages from './Navpages';
import { SessionProvider, useSession } from 'next-auth/react';
import { clearAuthData, setAuthData } from '@/redux/sessionSlice';
import Yellowuser from './portal/mlo/Yellowuser';
import { setUserType } from '@/redux/usertypeSlice';
import Varefinancing from './Varefinancing';
import Fharefinancing from './Fharefinancing';
import Annual from './Annual';
import Signup from './Signup';
import Sitemap from './Sitemap';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  function AuthSync() {
    const { data: session, status } = useSession();
    const dispatch = useDispatch();
    const router = useRouter()
  
    useEffect(() => {
      if (status === 'authenticated' && session?.accessToken) {
        // Dispatch session and token to Redux store
        dispatch(setAuthData({ token: session.accessToken, session }));
        // router.push('/portal/mlo/Yellowuser');
      } else if (status === 'unauthenticated') {
        // Clear session if unauthenticated
        dispatch(clearAuthData());
      }
    }, [session, status, dispatch]);
  
  
    // return <AppContent/>; 
  }

  return (
    <SessionProvider session={pageProps.session} basePath="/api/auth">

    <Provider store={store}>
   
      <AppContent Component={Component} pageProps={pageProps} />
      
    </Provider>
    </SessionProvider>
  );
}

function AppContent({ Component, pageProps }) {
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isauthenticated = useSelector(state=> state.session?.isAuthenticated)
  const dispatch = useDispatch();
  const userType = useSelector((state)=> state.user.usertype)
  const currentUserType = useSelector((state) => state.user.usertype);
  //console.log('dsfdfsdfsd',userType)
  const { data: session, status } = useSession();

  useEffect(() => {
    const storedUserType = Cookies.get('usertype'); // Get usertype from cookie
    if (storedUserType) {
        dispatch(setUserType({ usertype: storedUserType }));
    }
}, [dispatch]);

console.log('usertype',store.getState().user.usertype)
  useEffect(() => {
    if (status === 'authenticated' && session?.accessToken) {
      dispatch(setAuthData({ token: session.accessToken, session }));
      dispatch(setLoginData({ token: session.accessToken }));
      // dispatch(setUserType({usertype: userType}))
    }
  }, [session, status, dispatch]);
  

  const publicRoutes = ['/',"/portal", '/AffordabilityCalculator', '/Professionals','/Registerborrower','/Conventional','/Amrloans','/Fhaloans',
    '/Valoans','/Usdaloans','/Nonqmloans','/HomeRefinancing','/CashoutRefinancing','/Equity','/Refinancing','/Monthlypayment',
    '/MortgageGlossary','/Refinancecalculator','/Consolidate','/Homebuyer','/Blog','/About','/Faq','/MortgageLoan','/MortageResources',
    '/CalculatorSection','/Terms','/Privacy','/Pdf','/PreApprovalPage','/Support','/Homeloan','/Varefinancing','/Annual','/Sitemap','/Fharefinancing','/Navpages',
    '/Signup'
  
  ]; // Add your public routes here
  useEffect(() => {
    // Check if user is logged in via cookies
    const loggedIn = Cookies.get('isLoggedIn') === 'true';
    dispatch(setAuthState(loggedIn));
    if(loggedIn){
      router.push("/portal")
    }
    else{
      router.push("/")
    }
   
  }, [dispatch]);

  useEffect(() => {
    // Redirect to home page if not logged in and trying to access a protected route
    if (!isLoggedIn && !isauthenticated && !publicRoutes.includes(router.pathname)) {
      router.push('/');
    }
  }, [isLoggedIn,isauthenticated, router.pathname, publicRoutes]);

  useEffect(() => {
    // Listen for route changes and redirect if not logged in and trying to access a protected route
    const handleRouteChange = (url) => {
      if (!isLoggedIn &&!isauthenticated && !publicRoutes.includes(url)) {
        router.push('/');
      }
    };

    // Add event listener for route changes
    router.events.on('routeChangeStart', handleRouteChange);

    // Cleanup event listener on component unmount
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [isLoggedIn,isauthenticated, router.events, publicRoutes]);
  const renderContent = () => {
   
  
    console.log("Current Path:", router.pathname); 
    if (publicRoutes.includes(router.pathname)) {
      switch (router.pathname) {
        case '/':
          return (
            <>
            {/* <DashBoard/> */}
              <HomeBanner />
              <ScrollText />
              <SideMenu />
              {/* <Sitemap/> */}
              {/* <Chat/> */}
              {/* <Pdf/> */}
              <Idealproperty />
              <MonthlyPayment />
              <Trycalculator />
              <LendingJourney />
              <Navigating />
            </>
          );
        case '/AffordabilityCalculator':
          return <AffordabilityCalculator />; // Replace with your actual component
        case '/Registerborrower':
          return <Registerborrower />; // Replace with your actual component
        case '/Professionals':
          return <Professionals />;
        case '/Conventional':
         return <Conventional/>;
        case '/Amrloans':
        return <Amrloans/>;
        case '/Fhaloans':
        return <Fhaloans/>
        case '/Valoans':
        return <Valoans/>
        case '/Usdaloans':
          return <Usdaloans/>
        case '/Nonqmloans':
          return <Nonqmloans/>;
        case '/HomeRefinancing':
          return <HomeRefinancing/>;
        case '/CashoutRefinancing':
         return <CashoutRefinancing/>;
        case '/Equity':
          return <Equity/>;
        case '/Refinancing':
          return <Refinancing/>;
        case '/Monthlypayment':
          return <Monthlypayment/>;
          case '/MortgageGlossary':
          return <MortgageGlossary/>;
        case '/Refinancecalculator':
          return <Refinancecalculator/>;
          case '/Consolidate':
            return <Consolidate/>;
        case '/Homebuyer':
          return <Homebuyer/>;
        case '/Blog':
          return <Blog/>;
        case '/About':
          return <About/>;
        case '/Faq':
          return <Faq/>;
        case '/MortgageLoan':
          return <MortgageLoan/>;
        case '/MortageResources':
          return <MortageResources/>;
        case '/CalculatorSection':
          return <CalculatorSection/>;
          case '/Homeloan':
              return <Homeloan/>;
        case '/Terms':
          return <Terms/>;
          case '/Privacy':
            return <Privacy/>;
            case '/Pdf':
              return <Pdf/>;
      case '/PreApprovalPage':
      return <PreApprovalPage/>;
      case '/Support':
      return <Support/>;
      case '/Navpages':
        return <Navpages/>;
        case '/portal':
          return <DashBoard/>
          case '/Varefinancing':
            return <Varefinancing/>
          case '/Fharefinancing':
          return <Fharefinancing/>
          case '/Annual':
            return <Annual/>
          case '/Signup':
            return <Signup/>
            case '/Sitemap':
              return <Sitemap/>
        default:
          return null;
      }
    } else {
      return <Component {...pageProps} />;
    }
  };

  return <Layout>{renderContent()}</Layout>;
}

// Helper component to sync the session with Redux


export default MyApp;