//creating styles for components.
import {StyleSheet} from 'react-native';

const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        marginTop:50,
        padding:20,
        backgroundColor:'#ffffff',
        },
        paragraph:{
            margin:24,
            fontSize:18,
            fontWeight:'bold',
            textAlign:'center',
            color:'#34495e',
        },
        MainContainer:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFF8E1',
        },

        output:{
            margin:24,
            fontSize:18,
            fontWeight:'bold',
            textAlign:'center',
            color:'red',
        }
      
});
export default styles;