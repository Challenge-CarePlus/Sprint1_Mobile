import { StyleSheet } from 'react-native';

//  Paleta Centralizada
const PRIMARY_BLUE = '#0073e6';
const PURE_GREEN = '#00FF00';
const WHITE_COLOR = '#ffffff';
const GREY_TEXT = '#333333';


export const styles = StyleSheet.create({


  // LOGIN
  
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titleLogo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    color: PRIMARY_BLUE,
    textAlign: 'center',
  },
  buttonTextLogin: {
    color: WHITE_COLOR,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
   inputLogin: {
    width: '80%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: WHITE_COLOR,
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    color: GREY_TEXT,
    textAlign: 'center',
  },
    buttonLogin: {
    marginTop: 15,
    backgroundColor: PRIMARY_BLUE,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    elevation: 3,
  },

  // HOME
  
  containerHome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: WHITE_COLOR,
  },
  logoEcoa: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginVertical: 25,
    borderRadius: 30,
  },
   titleHome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    color: PRIMARY_BLUE,
    textAlign: 'center',
  },
   pickerContainer: {
    width: '90%',
    borderColor: PRIMARY_BLUE,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: WHITE_COLOR,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 2,
  },
  picker: {
    height: 55,
    width: '100%',
    color: PRIMARY_BLUE,
  },
   buttonHome: {
    marginTop: 15,
    backgroundColor: PRIMARY_BLUE,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    elevation: 3,
  },
   buttonText: {
    color: WHITE_COLOR,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // Textos das idades

  balaoContainer: {
  backgroundColor: WHITE_COLOR,
  padding: 15,
  borderRadius: 20,
  marginTop: 15,
  marginHorizontal: 10,
  borderWidth: 1,
  borderColor: PURE_GREEN,
  elevation: 3, // Android sombra
  shadowColor: "#000", // iOS sombra
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 3,
},

balaoTexto: {
  fontSize: 16,
  color: '#333',
  lineHeight: 22,
  textAlign: 'justify',
},

  

  // RESULTADOS
  
  containerResult: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: WHITE_COLOR,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: GREY_TEXT,
    textAlign: 'center',
  },
  result: {
    fontSize: 30,
    fontWeight: 'bold',
    color: PRIMARY_BLUE,
    marginTop: 20,
    marginBottom: 10,
  },
    titleResult: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    color: PRIMARY_BLUE,
    textAlign: 'center',
  },
   buttonBack: {
    marginTop: 20,
    backgroundColor: PRIMARY_BLUE,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    elevation: 3,
  },
  error: {
    marginTop: 20,
    color: 'red',
    fontWeight: '600',
  },


  // PERFIL
  
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 30,
    borderWidth: 4,
    borderColor: PURE_GREEN,
  },
  titleUser: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    color: PRIMARY_BLUE,
    textAlign: 'center',
  },
  inputProfile: {
    width: '80%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: WHITE_COLOR,
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    color: GREY_TEXT,
    textAlign: 'center',
  },
  perfilInfo: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginBottom: 5,
  },
  perfilLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GREY_TEXT,
  },
  perfilValue: {
    fontSize: 16,
    color: PRIMARY_BLUE,
    fontWeight: '600',
  },

  //  Sobre 
  
  titleSobre: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    color: PRIMARY_BLUE,
    textAlign: 'center',
  },
   resultadoSobre: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: GREY_TEXT,
    textAlign: 'center',
  },
  textSobre: {
    marginTop: 10, 
    textAlign: 'center',
  },
  balaoSobre: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: PURE_GREEN,
    elevation: 4, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    marginTop: 15,
    marginHorizontal: 10,
  },
  balaoText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    textAlign: 'left',
  },

});
