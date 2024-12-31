$(document).ready(function () {
    // Add Task
    $('#addTaskBtn').click(function () {
        const taskText = $('#taskInput').val().trim();
        if (taskText) {
            const taskItem = `
                <li>
                    <span>${taskText}</span>
                    <button class="complete-btn">Complete</button>
                    <button class="delete-btn">Delete</button>
                </li>`;
            $('#todoList').append($(taskItem).hide().fadeIn());
            $('#taskInput').val('');
        }
    });

    // Mark Task as Complete
    $('#todoList').on('click', '.complete-btn', function () {
        $(this).parent().toggleClass('completed');
    });

    // Delete Task
    $('#todoList').on('click', '.delete-btn', function () {
        $(this).parent().fadeOut(function () {
            $(this).remove();
        });
    });

    // Filter Tasks
    $('.filter-btn').click(function () {
        const filter = $(this).data('filter');
        $('li').each(function () {
            const isCompleted = $(this).hasClass('completed');
            if (filter === 'all' || 
                (filter === 'completed' && isCompleted) || 
                (filter === 'pending' && !isCompleted)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});
