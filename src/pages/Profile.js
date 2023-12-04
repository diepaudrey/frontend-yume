import ProfileBox from '../components/ProfileBox';
import Header from '../components/Header.js';
import AccountService from '../Services/AccountService.js';

export default function Profile(){
    return <>
    <Header/>
    <ProfileBox user={AccountService.getUserInfo()}/>
    </>
}