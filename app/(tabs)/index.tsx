import { Image, StyleSheet, Text, View } from 'react-native';
import SearchBar from '@/components/SearchBar';

export default function HomeScreen() {
	return (
		<View>
			<SearchBar
				text="Where do you want to go?"
				placeholder="Search"
				setText={() => {}}
				handleOnPress={() => {}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: 'absolute',
	},
});
