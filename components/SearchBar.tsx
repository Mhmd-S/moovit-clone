import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, TextInput, View } from 'react-native';

type Props = {
	text: string;
	placeholder: string;
	setText: (text: string) => void;
	handleOnPress: () => void;
};

const SearchBar: React.FC<Props> = ({
	text,
	setText,
	placeholder,
	handleOnPress,
}) => {
	return (
		<View style={styles.container}>
			<TextInput
				onChange={(e) => setText(e.target.value)}
				style={styles.input}
				placeholder={placeholder}
				onChangeText={(newText) => setText(newText)}
				defaultValue={text}
			/>
			<Button
				title="Search"
				onPress={handleOnPress}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	input: {
		width: '80%',
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
	},
	button: {
		width: '20%',
	},
});

export default SearchBar;
