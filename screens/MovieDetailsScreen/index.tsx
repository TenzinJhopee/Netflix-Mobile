import React, {useState} from 'react';
import { Image, Pressable, FlatList } from 'react-native';
import { Text, View} from '../../components/Themed';
import styles from './styles';
import {Picker} from '@react-native-picker/picker';
import EpisodeItem from '../../components/EpisodeItem';
import movie from '../../assets/data/movie';
import { AntDesign, Entypo, MaterialIcons, Ionicons, Feather } from '@expo/vector-icons';

const firstSeasons = movie.seasons.items[0];
const firstEpisode = firstSeasons.episodes.items[0];


const MovieDetailsScreen = () => {
    const [currentSeason, setCurrentSeason] = useState(firstSeasons)
    const seasonNames = movie.seasons.items.map(season => season.name);

    return (
        <View>
         <Image style={styles.image} source={{ uri: firstEpisode.poster }}/>
         <FlatList
            data={currentSeason.episodes.items}
            renderItem={({ item}) => <EpisodeItem episode={item} />}
            style={{ marginBottom: 300 }}
            ListHeaderComponent={(
                <View style={{ padding: 12 }}>
                {/* <EpisodeItem episode={firstEpisode}/> */}
                <Text style={styles.title}>{movie.title}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.match}> 98% match</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                    <View style={styles.ageContainer}>
                        <Text style={styles.age}>12+</Text>
                    </View>
                    <Text style={styles.year}>{movie.numberOfSeasons} Sessons</Text>
                    <MaterialIcons name="hd" size={24} />
                </View>
                   <Pressable onPress={() => { console.warn('Plage')}} 
                       style={styles.playButton}>
                       <Text style={styles.playButtonText}>
                           <Entypo name="controller-play" size={24} color="black" />
                           Play
                       </Text>
                   </Pressable>
       
                   <Pressable onPress={() => { console.warn('Plage')}} 
                       style={styles.downloadButton}>
                       <Text style={styles.downloadButtonText}>
                           <AntDesign name="download" size={16} color="white"
                           style={{paddingRight: 5}} />
                           { ''}
                           Download
                       </Text>
                   </Pressable>
       
                   <Text style={{ marginVertical: 10}}>{movie.plot}</Text>
                   <Text style={styles.year}>Cast: {movie.cast}</Text>
                   <Text style={styles.year}>Creator: {movie.creator}</Text>
       
                   {/* Row with icons button */}
                   <View style={{flexDirection: 'row', marginTop: 20}}>
                       <View style={{justifyContent: 'center', marginHorizontal: 20}}>
                           <AntDesign name="plus" size={24} color={'white'}/>
                           <Text style={{color: 'darkgrey', marginTop: 5}}>My List</Text>
                       </View>
       
                       <View style={{justifyContent: 'center', marginHorizontal: 20}}>
                           <Feather name="thumbs-up" size={24}  color={'white'}/>
                           <Text style={{color: 'darkgrey', marginTop: 5}}>Rate</Text>
                       </View>
       
                       <View style={{justifyContent: 'center', marginHorizontal: 20}}>
                           <Ionicons name="share" size={24} color={'white'} />
                           <Text style={{color: 'darkgrey', marginTop: 5}}>Share</Text>
                       </View>
                   </View>
                <Picker
                    selectedValue={currentSeason.name}
                    onValueChange={(itemValue, itemIndex) => {
                        setCurrentSeason(movie.seasons.items[itemIndex])
                    }
                }
                style={{color: 'white', width: 130}}
                dropdownIconColor={'white'}
                >
                    {seasonNames.map(seasonName => (
                        <Picker.Item label={seasonName} value={seasonName} key={seasonName} />
                    ))}
                </Picker>
                </View>

            )}
         />
        </View>
    )
}

export default MovieDetailsScreen;