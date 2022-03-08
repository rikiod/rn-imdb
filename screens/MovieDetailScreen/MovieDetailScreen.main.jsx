import React from "react";
import { SafeAreaView, Text, Image, View, ScrollView } from "react-native";
import { styles } from "./MovieDetailScreen.styles";

export default function MovieDetailScreen({ route }) {
  // TODO: Recieve the movieItem by destructuring route params.
  const { movieItem } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        {/* TODO: Configure this screen to have an image and appropriate text describing the movie. 
                See the example on the spec for design inspiration.
                Feel free to use the styles below. */}

        <View style={styles.imgView}>
          <Image
            source={{uri:movieItem.posterurl}}
            style={styles.image}
            
          />
        </View>

        <Text style={styles.h2}>Released {movieItem.year}</Text>
        <Text style={styles.h2}>{movieItem.genres.join(", ")}</Text>
        <Text style={styles.h2}>{movieItem.actors.join(", ")}</Text>
        <Text style={styles.h4}>{movieItem.storyline}</Text>
      
      </ScrollView>
    </SafeAreaView>
  );
}
