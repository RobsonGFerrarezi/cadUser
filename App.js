import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, Touchable, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


export default function App() {
  const [codigo, setCodigo] = React.useState('');

  function salvar() {


  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Cadastro de Usuários</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Código:</Text>
        <TextInput style={styles.input} 
        placeholder="Digite o código"
        keyboardType='numeric'
        onChangeText={codigo => setCodigo(codigo)}
        value={codigo}/>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput style={styles.input} 
        placeholder="Digite o nome"
        keyboardType='default'
        onChangeText={nome => setNome(nome)}
        value={nome}/>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput style={styles.input} 
        placeholder="Digite o e-mail"
        keyboardType='email-address'
        onChangeText={email => setEmail(email)}
        value={email}/>
      </View>

      <View style={styles.formButton}>
        <TouchableOpacity style={styles.buttons} title="Salvar" onPress={salvar}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} title="Limpar" onPress={limpar}>
          <FontAwesome5 name="broom" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} title="Listar" onPress={listar}>
          <Text style={styles.buttonText}>Listar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
