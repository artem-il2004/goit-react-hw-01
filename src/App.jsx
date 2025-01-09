import Profile from "./components/task-01/Profile";
import userData from "./userData.json";
import "./App.css"
import FriendList from "./components/task-02/FriendList";
import friends from "./friends.json"
import TransactionHistory from "./components/task-03/TransactionHistory";
import transactions from "./transactions.json"

const App = () => {
 return (
 <>
 <Profile
 name={userData.username}
 tag={userData.tag}
 location={userData.location}
 image={userData.avatar}
 stats={userData.stats}
         />
<FriendList friends={friends} />
<TransactionHistory items = {transactions}/>
     </>
 );
};
export default App;