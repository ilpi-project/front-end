import { ScrollView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
import Header from '@/components/Header/Header';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import COLORS from '@/config/colors';
import { formatDate } from '@/utils/formatters';

export const Schedule = () => {
    const todayDate = new Date();
    const today: DateData = {
        dateString: todayDate.toISOString().split('T')[0],
        day: todayDate.getDate(),
        month: todayDate.getMonth() + 1,
        year: todayDate.getFullYear(),
        timestamp: todayDate.getTime(),
    };
    const [day, setDay] = useState<DateData>(today);

    LocaleConfig.locales['br'] = {
        monthNames: [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro',
        ],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
        today: 'Hoje',
    };

    LocaleConfig.defaultLocale = 'br';

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Header text="Agenda" />
                <Calendar
                    style={styles.calendar}
                    headerStyle={styles.calendarHeader}
                    theme={{
                        calendarBackground: 'transparent',
                        textSectionTitleColor: COLORS.white,
                        selectedDayTextColor: COLORS.white,
                        todayTextColor: COLORS.green[400],
                        dayTextColor: COLORS.black,
                        textDisabledColor: COLORS.green[100],
                        dotColor: COLORS.green[800],
                        selectedDotColor: COLORS.white,
                        arrowColor: COLORS.white,
                        monthTextColor: COLORS.white,
                        textMonthFontWeight: 'bold',
                        textDayFontWeight: '500',
                        textDayHeaderFontWeight: 'bold',
                        textDayFontSize: 16,
                        textMonthFontSize: 18,
                        textDayHeaderFontSize: 14,
                    }}
                    enableSwipeMonths={true}
                    onDayPress={setDay}
                    markedDates={
                        day && {
                            [day.dateString]: { selected: true, selectedColor: COLORS.green[400] },
                        }
                    }
                />
                <View style={styles.schedulesContainer}>
                    <Text style={styles.schedulesTitle}>Agendamentos da semana</Text>
                    <TouchableOpacity style={styles.schedule}>
                        <View style={styles.scheduleTextContainer}>
                            <Text style={styles.scheduleText}>Visita Familiar</Text>
                            <Text style={styles.scheduleText}>19/02</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.schedule}>
                        <View style={styles.scheduleTextContainer}>
                            <Text style={styles.scheduleText}>Visita Familiar</Text>
                            <Text style={styles.scheduleText}>19/02</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.schedule}>
                        <View style={styles.scheduleTextContainer}>
                            <Text style={styles.scheduleText}>Visita Familiar</Text>
                            <Text style={styles.scheduleText}>19/02</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.schedule}>
                        <View style={styles.scheduleTextContainer}>
                            <Text style={styles.scheduleText}>Visita Familiar</Text>
                            <Text style={styles.scheduleText}>19/02</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={styles.dayInputContainer}>
                <TextInput placeholder={"Agendar compromisso em " + formatDate(day.dateString)} style={styles.dayInput} />
                <TouchableOpacity>
                    <Ionicons name="add-circle" size={30} color={COLORS.green[800]}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

