import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles } from './assets/styleSheet';

// --- Tela de Login ---
function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert('Erro', 'Digite um e-mail válido.');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    Alert.alert('Sucesso', 'Login realizado com sucesso!');
    navigation.replace('RootDrawer'); // substitui a tela atual e vai pro app principal
  };

  return (
    <View style={styles.containerHome}>
      <Image
        source={require('./assets/Gemini_Generated_Image_b64jcsb64jcsb64j.png')}
        style={{ width: 150, height: 150, marginBottom: 20, borderRadius: 30 }}
      />
      <Text style={styles.titleLogo}>Bem-vindo ao Ecoa</Text>

      <TextInput
        style={styles.inputLogin}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.inputLogin}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
        <Text style={styles.buttonTextLogin}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

// --- Tela de Perfil ---
function PerfilUsuarioScreen() {
  const [userName, setUserName] = useState('Isabela Barcellos');
  const [cadastro, setCadastro] = useState('553746');
  const [dataNascimento, setDataNascimento] = useState('21/04/2004');
  const plano = 'Ecoa Plus Total';
  const idade = 21;

  return (
    <View style={styles.containerHome}>
      <Text style={styles.titleUser}>Meu Perfil</Text>

      <Image
        source={require('./assets/avatar.jpg')}
        style={styles.avatar}
        resizeMode="cover"
      />

      <TextInput
        style={styles.inputProfile}
        value={userName}
        onChangeText={setUserName}
        placeholder="Seu Nome Completo"
      />

      <TextInput
        style={styles.inputProfile}
        value={cadastro}
        onChangeText={setCadastro}
        placeholder="cadastro"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.inputProfile}
        value={dataNascimento}
        onChangeText={setDataNascimento}
        placeholder="DD/MM/AAAA"
        keyboardType="numeric"
      />

      <View style={{ ...styles.perfilInfo}}>
        <Text style={styles.perfilLabel}>Plano:</Text>
        <Text style={styles.perfilValue}>{plano}</Text>
      </View>

      <View style={styles.perfilInfo}>
        <Text style={styles.perfilLabel}>Idade:</Text>
        <Text style={styles.perfilValue}>{idade} anos</Text>
      </View>
    </View>
  );
}

// --- Stack da Fono ---
type FonoStackParamList = {
  SelecaoIdade: undefined;
  Dores: { idade: string };
};

const FonoStack = createNativeStackNavigator<FonoStackParamList>();

type SelecaoProps = NativeStackScreenProps<FonoStackParamList, 'SelecaoIdade'>;

function SelecaoIdadeScreen({ navigation }: SelecaoProps) {
  const [faixaEtaria, setFaixaEtaria] = useState<string | null>(null);

  const NavegarParaDores = () => {
    if (!faixaEtaria) {
      Alert.alert('Atenção', 'Selecione uma faixa etária.');
      return;
    }
    navigation.navigate('Dores', { idade: faixaEtaria });
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={styles.containerHome}>
      <Image
        source={require('./assets/Gemini_Generated_Image_b64jcsb64jcsb64j.png')}
        style={styles.logoEcoa}
        resizeMode="cover"
      />
      <Text style={styles.titleHome}>
        Selecione em qual desses você está interessado:
      </Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={faixaEtaria}
          style={styles.picker}
          onValueChange={(itemValue) => setFaixaEtaria(itemValue as string)}>
          <Picker.Item label=" Selecione a Faixa Etária " value={null} />
          <Picker.Item label="Infantil (3 a 11 anos)" value="infantil" />
          <Picker.Item label="Adolescente (12 a 17 anos)" value="adolescente" />
          <Picker.Item label="Adulto (18 a 59 anos)" value="adulto" />
          <Picker.Item label="Idoso (60+)" value="idoso" />
        </Picker>
      </View>
      <TouchableOpacity
        style={styles.buttonHome}
        onPress={NavegarParaDores}
        activeOpacity={0.8}>
        <Text style={styles.buttonText}>Acessar o Tratamento</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

type DoresProps = NativeStackScreenProps<FonoStackParamList, 'Dores'>;

function DoresScreen({ route, navigation }: DoresProps) {
  const { idade } = route.params;

  const explicacao = (faixa: string) => {
    switch (faixa) {
      case 'infantil':
        return 'Na infância, a Fonoaudiologia atua principalmente em atrasos de fala e linguagem, dificuldades para articular sons (como R, L, S e CH), alterações auditivas que prejudicam a comunicação, desafios sociais relacionados à comunicação, gagueira, dificuldades na leitura e escrita, além de problemas miofuncionais orais, como respiração bucal, deglutição atípica e hábitos prejudiciais (chupeta, dedo e mamadeira). O objetivo é promover uma comunicação clara, eficaz e adequada para cada etapa do desenvolvimento.';

      case 'adolescente':
        return 'A adolescência é um período de intensas mudanças físicas, emocionais e sociais. O corpo passa por transformações rápidas, enquanto o cérebro continua em desenvolvimento, especialmente nas áreas ligadas a tomada de decisões e controle emocional. É uma fase de descoberta de identidade, construção de autonomia e formação de hábitos que influenciam toda a vida adulta.';

      case 'adulto':
        return 'A fase adulta é marcada pela estabilidade e pela busca de independência plena. É um momento em que as responsabilidades aumentam, incluindo carreira, estudos, finanças e relações afetivas. O adulto tende a consolidar valores, habilidades e projetos de longo prazo, equilibrando crescimento pessoal com demandas do cotidiano.';

      case 'idoso':
        return 'O envelhecimento é um processo natural que traz mudanças físicas e cognitivas, mas também maior maturidade e experiência de vida. Nessa fase, a prioridade costuma ser manter a qualidade de vida por meio de cuidados com a saúde, atividades sociais e preservação da autonomia. O idoso desempenha um papel importante na sociedade, compartilhando sabedoria e história.';
      default:
        return '';
    }
  };

  return (
    <View style={styles.containerResult}>
      <Text style={styles.titleResult}>{idade.toUpperCase()}</Text>
      <Text style={styles.result}>Principais Dores Abordadas:</Text>

      {/* Balão */}
      <View style={styles.balaoContainer}>
        <Text style={styles.balaoTexto}>{explicacao(idade)}</Text>
      </View>

      <TouchableOpacity
        style={styles.buttonBack}
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}>
        <Text style={styles.buttonText}> Voltar </Text>
      </TouchableOpacity>
    </View>
  );
}


// --- Tela "Sobre" ---
function SobreProjetoScreen() {
  return (
    <View style={styles.containerResult}>
      <Text style={styles.titleSobre}>Sobre o Case</Text>
      <Text style={styles.resultadoSobre}>Ecoa Plus</Text>

      {/* BALÃO */}
      <View style={styles.balaoSobre}>
        <Text style={styles.balaoText}>
          Este aplicativo foi criado para ajudar pessoas que têm dificuldades na fala a treinar, 
          entender e melhorar sua comunicação. Aqui, você encontra conteúdos simples, orientações 
          claras e exercícios práticos de fonologia, organizados por faixa etária. O objetivo é tornar 
          o processo de aprendizado mais acessível, permitindo que cada usuário evolua no seu próprio 
          ritmo e desenvolva melhor articulação, pronúncia e confiança ao falar.
        </Text>
      </View>

    </View>
  );
}



//  Navegações

function FonoStackNavigator() {
  return (
    <FonoStack.Navigator initialRouteName="SelecaoIdade">
      <FonoStack.Screen
        name="SelecaoIdade"
        component={SelecaoIdadeScreen}
        options={{ headerShown: false }}
      />
      <FonoStack.Screen
        name="Dores"
        component={DoresScreen}
        options={{ title: 'Descrição das dores' }}
      />
    </FonoStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="FonoPrincipal"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: styles.buttonBack.backgroundColor,
      }}>
      <Tab.Screen
        name="FonoPrincipal"
        component={FonoStackNavigator}
        options={{ title: 'Ecoa' }}
      />
      <Tab.Screen
        name="PerfilUsuario"
        component={PerfilUsuarioScreen}
        options={{ title: 'Perfil' }}
      />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function RootDrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="EcoaApp">
      <Drawer.Screen
        name="EcoaApp"
        component={MainTabNavigator}
        options={{ title: 'Ecoa' }}
      />
      <Drawer.Screen
        name="SobreProjeto"
        component={SobreProjetoScreen}
        options={{ title: 'Sobre o Projeto' }}
      />
    </Drawer.Navigator>
  );
}


//  App Principal

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Tela de Login */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        {/* App principal dentro do Drawer */}
        <Stack.Screen
          name="RootDrawer"
          component={RootDrawerNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
